import React, { useEffect, useState } from 'react';
import { Pagination } from 'carbon-components-react';
import DocumentTable from './DocumentTable';
import NewDocumentUploader from './NewDocumentUploader';


// const LinkList = ({ url, homepageUrl }) => (
//   <ul style={{ display: 'flex' }}>
//     <li>
//       <Link href={url}>GitHub</Link>
//     </li>
//     {homepageUrl && (
//       <li>
//         <span>&nbsp;|&nbsp;</span>
//         <Link href={homepageUrl}>Homepage</Link>
//       </li>
//     )}
//   </ul>
// );

// const getRowItems = rows =>
//   rows.map(row => ({
//     ...row,
//     key: row.id,
//     stars: row.stargazers.totalCount,
//     issueCount: row.issues.totalCount,
//     createdAt: new Date(row.createdAt).toLocaleDateString(),
//     updatedAt: new Date(row.updatedAt).toLocaleDateString(),
//     links: <LinkList url={row.url} homepageUrl={row.homepageUrl} />,
//   })); 

export default function RepoPage() {
  const [documents, setDocuments] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [firstRowIndex, setFirstRowIndex] = useState(0);
  const [currentPageSize, setCurrentPageSize] = useState(25);

  useEffect(() => {
    fetch('/documents/initialize')
      .then(res => res.json())
      .then(res => setDocuments(res)) // getRowItems()
      .catch(err => console.log(err));
  }, []);

  const handleChangePaginization = ({ page, pageSize }) => {
    if (pageSize !== currentPageSize) {
      setCurrentPageSize(pageSize);
    }
    setFirstRowIndex(pageSize * (page - 1));
  }

  return (
    <div className="bx--grid bx--grid--full-width bx--grid--no-gutter repo-page">
      <div className="bx--row repo-page__r1">
        <div className="bx--col-lg-16">
          <NewDocumentUploader/>
        </div>
      </div>
      <div className="bx--row repo-page__r1">
        <div className="bx--col-lg-16">
          <DocumentTable
            rows={documents.slice(firstRowIndex, firstRowIndex + currentPageSize)}
          />
          <Pagination
            totalItems={totalItems}
            backwardText="Previous page"
            forwardText="Next page"
            pageSize={currentPageSize}
            pageSizes={[5, 10, 15, 25]}
            itemsPerPageText="Items per page"
            onChange={handleChangePaginization}
          />
        </div>
      </div>
    </div>
  );
};


