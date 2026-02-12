import { Router, Response } from 'express';
import prisma from '../db';
import { authenticateToken, AuthRequest } from '../middleware/auth';

const router = Router();

// Get all content (public)
router.get('/', async (req, res: Response) => {
    try {
        const content = await prisma.siteContent.findMany({
            orderBy: {
                section: 'asc',
            },
        });

        // Transform to a more usable format
        const contentBySection: Record<string, Record<string, string>> = {};

        content.forEach((item) => {
            if (!contentBySection[item.section]) {
                contentBySection[item.section] = {};
            }
            contentBySection[item.section][item.key] = item.value;
        });

        res.json({
            items: content,
            bySection: contentBySection,
        });
    } catch (error) {
        console.error('Get content error:', error);
        res.status(500).json({ error: 'Failed to fetch content' });
    }
});

// Get content by section (public)
router.get('/section/:section', async (req, res: Response) => {
    try {
        const { section } = req.params;

        const content = await prisma.siteContent.findMany({
            where: { section },
        });

        const contentMap: Record<string, string> = {};
        content.forEach((item) => {
            contentMap[item.key] = item.value;
        });

        res.json(contentMap);
    } catch (error) {
        console.error('Get content by section error:', error);
        res.status(500).json({ error: 'Failed to fetch content' });
    }
});

// Create or update content (Authenticated users - EDITOR and ADMIN)
router.put('/', authenticateToken, async (req: AuthRequest, res: Response) => {
    try {
        const { key, value, section } = req.body;

        if (!key || !value || !section) {
            return res.status(400).json({ error: 'Key, value, and section are required' });
        }

        const content = await prisma.siteContent.upsert({
            where: { key },
            update: { value, section },
            create: { key, value, section },
        });

        res.json({
            message: 'Content updated successfully',
            content,
        });
    } catch (error) {
        console.error('Update content error:', error);
        res.status(500).json({ error: 'Failed to update content' });
    }
});

// Batch update content (Authenticated users - EDITOR and ADMIN)
router.put('/batch', authenticateToken, async (req: AuthRequest, res: Response) => {
    try {
        const { items } = req.body;

        if (!Array.isArray(items)) {
            return res.status(400).json({ error: 'Items must be an array' });
        }

        const updates = await Promise.all(
            items.map((item: { key: string; value: string; section: string }) =>
                prisma.siteContent.upsert({
                    where: { key: item.key },
                    update: { value: item.value, section: item.section },
                    create: { key: item.key, value: item.value, section: item.section },
                })
            )
        );

        res.json({
            message: 'Content batch updated successfully',
            updated: updates.length,
            items: updates,
        });
    } catch (error) {
        console.error('Batch update content error:', error);
        res.status(500).json({ error: 'Failed to batch update content' });
    }
});

// Delete content (Authenticated users - EDITOR and ADMIN)
router.delete('/:key', authenticateToken, async (req: AuthRequest, res: Response) => {
    try {
        const { key } = req.params;

        await prisma.siteContent.delete({
            where: { key },
        });

        res.json({ message: 'Content deleted successfully' });
    } catch (error) {
        console.error('Delete content error:', error);
        res.status(500).json({ error: 'Failed to delete content' });
    }
});

export default router;
