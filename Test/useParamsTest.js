
  <script>
    import { useParams } from "react-router-dom";

    function User() {
      let { id } = useParams();

      return (
        <div>
          <h2>User ID: {id}</h2>
        </div>
      );
    }
  </script>
