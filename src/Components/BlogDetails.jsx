const BlogDetails = ({list}) => {
  return (
    <div>
      <div className='mx-auto my-16 contianer p-9'>
        <div className='grid grid-cols-1 mt-1 md:grid-cols-1 lg:grid-cols-1'>
          <div className='card w-100 glass'>
            <figure>
              <img src={list.postDetails.img} alt='card' />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>{list.postDetails.title}</h2>
              <p>{list.postDetails.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
