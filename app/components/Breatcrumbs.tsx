// components/Breadcrumbs.tsx
export function Breadcrumbs({ items }) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.title,
            item: item.url,
        })),
    }

    return (
        <>
            <script
                type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
    <nav aria-label="Breadcrumb">
    <ol className="flex space-x-2">
        {items.map((item, index) => (
                <li key={item.url}>
                <a href={item.url}>{item.title}</a>
    {index < items.length - 1 && <span className="mx-2">/</span>}
        </li>
    ))}
    </ol>
    </nav>
    </>
)
}