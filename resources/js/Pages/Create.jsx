import { useForm } from "@inertiajs/react";

function Create() {
    const { data, setData, post, errors, processing } = useForm({
        body: "",
    });
    if (processing) {
        console.log("processing");
    }
    // console.log(useForm());

    function submit(e) {
        e.preventDefault();
        post('/posts');
    }

    return (


        <>
            <div>
                <h1 className="text-2xl font-bold text-center">Create</h1>
            </div>
            <div className="w-1/2 mx-auto">
                <form onSubmit={submit}>
                    <textarea
                        value={data.body}
                        onChange={(e) => setData("body", e.target.value)}
                        name="body"
                        rows="10"
                        className={`border-2 border-gray-300 rounded-md p-2 w-full ${errors.body ? 'border-red-500' : ''}`}></textarea>
                    <p className="!text-red-500 !text-sm font-bold italic">{errors.body}</p>
                    <button type="submit"
                        disabled={processing}


                        className={`bg-blue-500 text-white p-2 rounded-md w-full ${processing ? 'opacity-50 cursor-not-allowed' : ''}`}>Create</button>
                    <p>{data.body}</p>
                </form>
            </div>


        </>

    )
}

export default Create;
