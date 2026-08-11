interface CategoryParams {
  params: {
    category: string;
  };
}

export default async function Category({ params }: CategoryParams) {
  const { category } = await params;
  return (
    <div>
      <h1>Dinamic Category: {category}</h1>
    </div>
  );
}
