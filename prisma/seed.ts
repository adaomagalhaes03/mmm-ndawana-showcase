import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    console.log('🌱 Starting database seed...');

    // Create admin user
    const adminPassword = await bcrypt.hash('admin123', 10);
    const admin = await prisma.user.upsert({
        where: { email: 'admin@mmm-ndawana.ao' },
        update: {},
        create: {
            email: 'admin@mmm-ndawana.ao',
            name: 'Administrator',
            password: adminPassword,
            role: 'ADMIN',
        },
    });
    console.log('✅ Admin user created:', admin.email);

    // Create editor user
    const editorPassword = await bcrypt.hash('editor123', 10);
    const editor = await prisma.user.upsert({
        where: { email: 'editor@mmm-ndawana.ao' },
        update: {},
        create: {
            email: 'editor@mmm-ndawana.ao',
            name: 'Editor',
            password: editorPassword,
            role: 'EDITOR',
        },
    });
    console.log('✅ Editor user created:', editor.email);

    // Seed initial content
    const contentData = [
        // Hero Section
        {
            key: 'hero_title',
            value: 'M.M.M. Ndawana, LDA',
            section: 'hero',
        },
        {
            key: 'hero_subtitle',
            value: 'Excelência em Construção Civil e Fornecimento de Materiais',
            section: 'hero',
        },
        {
            key: 'hero_description',
            value: 'Transformamos visões em realidade através de soluções completas em construção civil.',
            section: 'hero',
        },
        // About Section
        {
            key: 'about_title',
            value: 'Quem Somos',
            section: 'about',
        },
        {
            key: 'about_description',
            value: 'A M.M.M. Ndawana, LDA é uma empresa angolana dedicada à excelência em construção civil e fornecimento de materiais. Com anos de experiência no mercado, oferecemos soluções completas e personalizadas para cada projeto.',
            section: 'about',
        },
        // Services Section
        {
            key: 'services_title',
            value: 'Nossos Serviços',
            section: 'services',
        },
        {
            key: 'service_construction_title',
            value: 'Construção Civil',
            section: 'services',
        },
        {
            key: 'service_construction_description',
            value: 'Construção de edifícios residenciais, comerciais e industriais com qualidade e eficiência.',
            section: 'services',
        },
        {
            key: 'service_materials_title',
            value: 'Fornecimento de Materiais',
            section: 'services',
        },
        {
            key: 'service_materials_description',
            value: 'Fornecemos materiais de construção de alta qualidade para seus projetos.',
            section: 'services',
        },
        {
            key: 'service_consulting_title',
            value: 'Consultoria',
            section: 'services',
        },
        {
            key: 'service_consulting_description',
            value: 'Consultoria especializada para planejamento e execução de projetos.',
            section: 'services',
        },
    ];

    for (const content of contentData) {
        await prisma.siteContent.upsert({
            where: { key: content.key },
            update: { value: content.value, section: content.section },
            create: content,
        });
    }
    console.log(`✅ Seeded ${contentData.length} content items`);

    console.log('🎉 Seed completed successfully!');
    console.log('\n📝 Test Credentials:');
    console.log('Admin: admin@mmm-ndawana.ao / admin123');
    console.log('Editor: editor@mmm-ndawana.ao / editor123');
}

main()
    .catch((e) => {
        console.error('❌ Seed failed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
