import { Link } from "@inertiajs/react"
import Layout from "../Layout/Layout"
import { useForm } from "@inertiajs/react"

function Home({ posts }) {
    const { delete: destroy, processing } = useForm();

    function deletePost(id, e) {
        e.preventDefault();
        destroy(`/posts/${id}`);
    }

    console.log(posts);

    return (
        <>
            {/* <div className='text-blue-500 text-2xl font-bold'>Home</div> */}
            <div className='text-black-500 text-2xl'>
                {posts.data.map((post) => (
                    <div key={post.id} className="p-4 border-b">
                        <div className="flex justify-end">
                            {/* <div className="text-blue-500 text-2xl font-bold">{post.id}</div> */}
                            <div>posted on: {new Date(post.created_at).toLocaleDateString()}</div>
                            <form onSubmit={(e) => deletePost(post.id, e)}>
                                <button type="submit" disabled={processing} className="bg-red-500 text-white p-2 rounded-md">{processing ? 'Deleting...' : 'Delete'}</button>
                            </form>
                        </div>
                        <div className="text-black-500 text-2xl">{post.body}</div>

                    </div>
                ))}
            </div>
            <div>
                {posts.links.map((link) => (
                    <Link
                        preserveScroll
                        key={link.url}
                        href={link.url}
                        className={`p-4 border text-blue-500 text-2xl font-bold ${link.active ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                ))}
            </div>
            <Link preserveScroll href="/" className="block mt-[1000px] p-4 bg-blue-500 text-white rounded-md">
            </Link>
        </>
    )
}

// Home.layout = (page) => <Layout>{page}</Layout>

export default Home
