import { serve } from "bun";

// API Endpoint：接收 multipart/form-data 上傳
serve({
	async fetch(req) {
		if (
			req.method === "POST" &&
			req.headers.get("content-type")?.includes("multipart/form-data")
		) {
			const formData = await req.formData();
			const files: any[] = [];

			// 取得所有上傳的檔案
			formData.forEach((value, key) => {
				files.push(value);
			});

			// 回傳檔案資訊
			return new Response(JSON.stringify({ uploadedFiles: files }), {
				headers: { "Content-Type": "application/json" },
			});
		}

		// 若請求不是 POST 或非 multipart/form-data，則回傳錯誤
		return new Response("Invalid request", { status: 400 });
	},
	port: 3000,
});
