// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: '企业级设计系统',
		category: 'Web',
		img: require('@/assets/images/web-project-2.jpg'),
	},
	{
		id: 2,
		title: 'Quest 新标签页',
		category: 'Mobile',
		img: require('@/assets/images/mobile-project-2.jpg'),
	},
	{
		id: 3,
		title: '数字化转型项目',
		category: 'UI/UX Design',
		img: require('@/assets/images/ui-project-1.jpg'),
	},
	
];

export default projects;
