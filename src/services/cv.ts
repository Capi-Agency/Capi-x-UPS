import httpRequest from '../utils/httpRequest';

// export const uploadFile = async (file: any) => {
// 	const formData = new FormData();
// 	formData.append('file', file);
// 	const response = await fetch('https://thm.truecms.io/files', {
// 		method: 'POST',
// 		body: formData,
// 	});
// 	const url = await response.json();
// 	return url.data.id;
// };

// export const uploadCV = async (data: any) => {
// 	const query = `
// 		mutation {
// 			create_job_ticket_item(data: 
// 			{
// 				name: "${data?.full_name}",
// 				phone: "${data?.phone}",
// 				email: "${data?.email}",
// 				content: "${data?.content}",
// 				url_cv :"${data.url_cv}",
// 				position: "${data.position}"
// 			})
		
// 		}
// 	`;
// 	return await httpRequest.post('', { query });
// };
