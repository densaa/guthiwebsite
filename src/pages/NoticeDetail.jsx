import { useParams } from "react-router-dom";

function NoticeDetail() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold">
        Notice {id}
      </h1>
      <p className="mt-2 text-gray-600">

      </p>
    </div>
  );
}

export default NoticeDetail;
