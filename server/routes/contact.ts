import { Router, Request, Response } from 'express';
import prisma from '../db';
import { authenticateToken, AuthRequest } from '../middleware/auth';

const router = Router();

// Submit contact form (public)
router.post('/', async (req: Request, res: Response) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const contactMessage = await prisma.contactMessage.create({
            data: {
                name,
                email,
                subject,
                message,
            },
        });

        res.status(201).json({
            message: 'Message sent successfully',
            id: contactMessage.id,
        });
    } catch (error) {
        console.error('Submit contact form error:', error);
        res.status(500).json({ error: 'Failed to send message' });
    }
});

// Get all messages (Authenticated users only)
router.get('/', authenticateToken, async (req: AuthRequest, res: Response) => {
    try {
        const messages = await prisma.contactMessage.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });

        res.json(messages);
    } catch (error) {
        console.error('Get messages error:', error);
        res.status(500).json({ error: 'Failed to fetch messages' });
    }
});

// Get unread messages count (Authenticated users only)
router.get('/unread/count', authenticateToken, async (req: AuthRequest, res: Response) => {
    try {
        const count = await prisma.contactMessage.count({
            where: {
                isRead: false,
            },
        });

        res.json({ count });
    } catch (error) {
        console.error('Get unread count error:', error);
        res.status(500).json({ error: 'Failed to fetch unread count' });
    }
});

// Mark message as read (Authenticated users only)
router.patch('/:id/read', authenticateToken, async (req: AuthRequest, res: Response) => {
    try {
        const { id } = req.params;

        const message = await prisma.contactMessage.update({
            where: { id },
            data: { isRead: true },
        });

        res.json({
            message: 'Message marked as read',
            data: message,
        });
    } catch (error) {
        console.error('Mark as read error:', error);
        res.status(500).json({ error: 'Failed to update message' });
    }
});

// Delete message (Authenticated users only)
router.delete('/:id', authenticateToken, async (req: AuthRequest, res: Response) => {
    try {
        const { id } = req.params;

        await prisma.contactMessage.delete({
            where: { id },
        });

        res.json({ message: 'Message deleted successfully' });
    } catch (error) {
        console.error('Delete message error:', error);
        res.status(500).json({ error: 'Failed to delete message' });
    }
});

export default router;
