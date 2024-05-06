// import { useEffect, useState } from 'react';
//
// interface SeoData {
//     site: {
//         siteMetadata: {
//             defaultTitle: string;
//             defaultDescription: string;
//             siteUrl: string;
//         };
//     };
// }
//
// export const useWebsiteMetadata = () => {
//     const [data, setData] = useState<SeoData>({
//         site: {
//             siteMetadata: {
//                 defaultTitle: '',
//                 defaultDescription: '',
//                 siteUrl: '',
//             },
//         },
//     });

// useEffect(() => {
//     const fetchMetadata = async () => {
//         const result = await fetch('MISSING URL!!', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             signal: AbortSignal.timeout(300 * 1_000),
//             body: JSON.stringify({
//                 query: `
//                 query SEO {
//                     site {
//                         siteMetadata {
//                             defaultTitle: title
//                             defaultDescription: description
//                             siteUrl
//                         }
//                     }
//                 }
//               `,
//             }),
//         });
//
//         const json = await result.json();
//
//         setData(json.data);
//     };
//
//     fetchMetadata();
// });

// return { data };
// };
