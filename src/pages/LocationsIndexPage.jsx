import LocalityDirectory from "../components/locality/LocalityDirectory";

export default function LocationsIndexPage() {
  return (
    <div className="page-view py-6">
      <LocalityDirectory
        eyebrow="EXPLORE PUNE"
        title="Find clinic information by locality."
      />
    </div>
  );
}
