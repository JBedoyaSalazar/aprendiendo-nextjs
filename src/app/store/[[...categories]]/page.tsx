interface CategoryParams {
  params: Promise<{
    categories: string[];
  }>;
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
}

export default async function Category({
  params,
  searchParams,
}: CategoryParams) {
  const { categories } = await params;
  const resolvedSearchParams = await searchParams;

  return (
    <div>
      <h1>Dinamic Category: {categories?.join(", ") ?? "All products"}</h1>
      <p>
        Search Params:{" "}
      </p>
        <ul>
          {Object.entries(resolvedSearchParams).map(([key, value]) => (
            <li key={key}>
              {key}: {Array.isArray(value) ? value.join(", ") : value}
            </li>
          ))}
        </ul>
      
    </div>
  );
}
