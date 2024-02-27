import styles from './singlePost.module.css';
import Image from 'next/image';
interface Params {
  // Define the structure of your dynamic parameters here
  slug: string;
}
interface SearchParams {
  q: string;
  sort: string;
}
const singleBlogPostPage: React.FC<{
  params: Params;
  searchParams: SearchParams;
}> = ({ params, searchParams }) => {
  console.log(params.slug);
  console.log(searchParams.q);
  console.log(searchParams);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/62.png" alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Lorem ipsum</h1>
        <div className={styles.detail}>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Srijon Paul</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {new Date().toLocaleDateString()}
            </span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          vero, consequatur veritatis possimus aperiam qui, eveniet, amet
          distinctio totam nostrum laborum praesentium libero illo dolores
          nulla. Odio, accusantium rerum? Illum?
        </div>
      </div>
    </div>
  );
};

export default singleBlogPostPage;
