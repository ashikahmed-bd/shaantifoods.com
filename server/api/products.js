export default defineEventHandler(() => {
    return [
        {
            id: 1,
            name: 'Premium Dried Mango',
            slug: 'premium-dried-mango',
            sku: 'PDM-001',

            status: 'active',
            featured: true,

            cover_url: '/images/products/dried-mango/cover.jpg',

            gallery: [
                '/images/products/dried-mango/1.jpg',
                '/images/products/dried-mango/2.jpg',
                '/images/products/dried-mango/3.jpg'
            ],

            overview:
                'Naturally sweet dried mango slices made from premium Rajshahi mangoes.',

            description:
                'Our Premium Dried Mango is produced from carefully selected ripe mangoes using advanced dehydration technology. The product retains its natural flavor, aroma, color and nutritional value while ensuring a long shelf life.',

            features: [
                '100% Natural',
                'No Artificial Color',
                'No Preservatives',
                'Export Quality',
                'Long Shelf Life'
            ],

            benefits: [
                'Rich in dietary fiber',
                'Contains Vitamins A & C',
                'Healthy snack alternative',
                'Suitable for retail and wholesale'
            ],

            currency: 'USD',
            price: 8.5,
            compare_price: 10,

            minimum_order_quantity: 500,
            unit: 'KG',

            stock_status: 'in_stock',
            stock_quantity: 5000,

            country_of_origin: 'Bangladesh',
            region: 'Rajshahi',

            specifications: {
                variety: 'Amrapali',
                moisture: '< 15%',
                shelf_life: '18 Months',
                storage: 'Store in a cool and dry place',
                packaging: '1kg, 5kg, 10kg Vacuum Pack',
                certification: [
                    'HACCP',
                    'ISO 22000',
                    'BSTI'
                ]
            },

            shipping: {
                lead_time: '7-15 Days',
                export_available: true,
                shipping_method: [
                    'Air Freight',
                    'Sea Freight'
                ]
            },

            meta_title: 'Premium Dried Mango Supplier & Exporter from Bangladesh',
            meta_description: 'Buy premium export-quality dried mango from Bangladesh. 100% natural, preservative-free, rich in vitamins and available for bulk wholesale orders worldwide.',
            meta_keywords: 'dried mango, premium dried mango, mango supplier bangladesh, mango exporter, wholesale dried mango, natural dried fruit, rajshahi mango, export quality mango'
        }
    ]
})