import { Link } from 'nextra-theme-docs';
// @ts-nocheck
interface Props {
  href: string;
  title: string;
  description: string;
  date?: string;
}

const BlogIndexArticle = ({ href, title, description, date }: Props) => {
  return (
    <div className="mb-10">
      <Link
        // @ts-ignore
        href={href}
        style={{ color: 'inherit', textDecoration: 'none' }}
        className="block font-semibold mt-8 text-2xl"
      >
        {title}
      </Link>
      <p className="opacity-80" style={{ marginTop: '.5rem' }}>
        {description}{' '}
        <span className="block mt-2 text-sm">
          <Link
            // @ts-ignore
            href={href}
          >
            {'Read more →'}
          </Link>
        </span>
      </p>
      {date ? <p className="opacity-50 text-sm mt-2">{date}</p> : null}
    </div>
  );
};

export default BlogIndexArticle;
