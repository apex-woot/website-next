import { SEO } from '@components/app/seo';
// import { GenerateJobPosting } from '@utils/generate-job-posting';
// import { type FC, useCallback, useEffect, useState } from 'react';

const Job = () => {
    // const {
    //     params: { jobId },
    // } = props;
    // const [height, setHeight] = useState(800);
    // const [jobPosting, setJobPosting] = useState(null);
    // const frameSrc = `https://tradesorg.retool.com/embedded/public/615d9f64-4934-4103-baf4-f447e70ed0e6#jobId=${jobId}`;

    // const generateJSON = useCallback(GenerateJobPosting, []);

    // useEffect(() => {
    //     (async () => {
    //         const res = await generateJSON(jobId);
    //         setJobPosting(res);
    //     })();
    //
    //     const handleMessage = (event: MessageEvent) => {
    //         if (event?.data?.type === 'resize' || event?.data?.viewport?.height) {
    //             setHeight(event?.data?.viewport?.height);
    //         }
    //     };
    //     window?.addEventListener('message', handleMessage);
    //
    //     return () => {
    //         window?.removeEventListener('message', handleMessage);
    //     };
    // }, [jobId]);

    return (
        <>
            {/* TODO: <SEO title={`${t('pages.careers.seo', 'Open Positions')} | trades.org`} jobPosting={jobPosting} /> */}
            {/* <SEO title={`${t('pages.careers.seo', 'Open Positions')} | trades.org`} /> */}
            {/* {jobId && ( */}
            {/*     <iframe */}
            {/*         src={frameSrc} */}
            {/*         title="Job Page" */}
            {/*         style={{ height: `${height}px` }} */}
            {/*         className="w-full overflow-hidden overflow-x-hidden overflow-y-hidden border-0" */}
            {/*     /> */}
            {/* )} */}
        </>
    );
};

export default Job;
