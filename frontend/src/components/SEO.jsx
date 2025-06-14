import { Helmet } from "react-helmet-async";
// eslint-disable-next-line react/prop-types
const SEO = ({ content, title, route }) => {
  return (
    <div>
      <Helmet>
        <meta name="description" content={content} />
        <link rel="canonical" href={route} />
        <title>{title}</title>
      </Helmet>
    </div>
  );
};

export default SEO;
