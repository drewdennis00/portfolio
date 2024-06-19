interface Person {
	name: string;
	resources: Resource[];
	skills: Skill[];
}

interface Resource {
	link: string;
	icon: Icon;
	name: string;
}

interface Icon {
	name: string;
	color: string;
}

interface Skill {
	name: string;
	width: string;
	icon: Icon[];
	description: string;
}

const skills: Skill[] = [
	{
		name: 'Future plans',
		width: 'med',
		icon: [
			{
				name: 'clarity:computer-outline-badged',
				color: 'text-stone-50'
			}
		],
		description: ` As I continue to advance my career in the field of <b class="text-pink-500"> computer graphics </b> and IT, I am committed to expanding my expertise and certifications. By the end of this summer, I aim to become Cisco Certified and CompTIA Certified. These certifications will not only enhance my technical skills but also open up new opportunities for professional growth and development.
            
            
            
            `
	},
	{
		name: 'Education',
		width: 'large',
		icon: [
			{
				name: 'zondicons:education',
				color: 'text-orange-500'
			}
		],
		description: `
		I graduated from Wilson Memorial High School in 2018 with a 3.5 GPA. Afterward, I attended Blue Ridge Community College, where I am pursuing an associate's degree in graphic design. I plan to graduate from VCU in 2025 with a Bachelor's of Art in Computer Science. Currently, I am AWS certified and am finishing my  <text class="text-orange-500"> secuirty+ </text> certification this summer.

		
            
            
            
            `
	},
	{
		name: 'About me',
		width: 'med',
		icon: [
			{
				name: 'fluent-emoji-high-contrast:house',
				color: 'text-yellow-500'
			}
		],
		description: `
		I hail from Harrisonburg, Virginia, where I've spent most of my life. Currently, I'm in the process of moving to Woodstock, Virginia, with my wonderful fiancée. In my free time, I enjoy fishing and working on vehicles. I have a passion for learning and working with
		<text class="text-blue-500"> technology. </text>
            
            
            
            `
	},
	{
		name: 'Classes I have taken',
		width: 'med',
		icon: [
			{
				name: 'openmoji:classical-building',
				color: 'text-green-500'
			}
		],
		description: `
		Notable <text class="text-green-500"> classes </text> that I have completed so far: 
<ul>
		<li> -Database Fundamentals </li>
		<li> -Current Issues and Web Design </li>
		<li> -Computer Graphics I </li>
		<li> -Computer Graphics II </li>
		<li> -Principles of Computer Science </li>
		<li> -Introduction to Digital Literacy </li>
		<li> -Cloud Computing Infrastructure and Services </li>
</ul>		
		
		
		
		`
	}
];

export const Person: Person = {
	name: 'Drew Dennis',
	resources: [
		{
			link: 'https://github.com/drewdennis00',
			icon: {
				name: 'mdi:github',
				color: 'text-stone-300'
			},
			name: 'GitHub'
		},
		{
			link: 'https://www.linkedin.com/in/drew-dennis-5039902a3/',
			icon: {
				name: 'mdi:linkedin',
				color: 'text-blue-600'
			},
			name: 'Linkedin'
		},
		{
			link: 'https://www.snapchat.com/add/slow-subie?share_id=AcakumvgnPs&locale=en-US',
			icon: {
				name: 'mingcute:snapchat-line',
				color: 'text-yellow-300'
			},
			name: 'Snapchat'
		}
	],
	skills: skills
};
