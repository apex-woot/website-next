/**
 * @type {import('next-sitemap').IConfig}
 */
module.exports = {
	siteUrl: "https://www.trades.org",
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [{ userAgent: "*", allow: "/" }],
	},
};
