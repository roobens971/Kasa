function Tags({tags}) {
  return (
    <div className="tags">
     {tags.map((tag) => <span>{tag}</span>)}
    </div>
  );
}

export default Tags;
