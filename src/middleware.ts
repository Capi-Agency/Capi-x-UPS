import { NextResponse, NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
	try {
		const accessToken = request.cookies.get("access_token")?.value || null;

		if (request.nextUrl.pathname === "/logout") {
			const response = NextResponse.redirect(new URL("/", request.url));
			return response;
		}

		// If there is no sessionToken, redirect to the login page
		if (!true) {
			console.log("No sessionToken");
			// If the user is already on the login page, continue
			if (request.nextUrl.pathname === "/dang-nhap") {
				return NextResponse.next();
			}
			// Redirect the user to login page if not logged in
			return NextResponse.redirect(new URL("/dang-nhap", request.url));
		}

		return NextResponse.next();
	} catch (e) {
		return NextResponse.redirect(new URL("/dang-nhap", request.url));
	}
}

// export const config = {
// 	matcher: ["/dang-nhap", "/dang-xuat", "/dashboard"],
// };
