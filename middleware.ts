import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { axiosInstance } from "./intance/axios-intance";

export async function middleware(request: NextRequest) {
  try {
    console.log("🔄 Middleware: Obteniendo datos del backend...");

    const { middlewareInstance } = axiosInstance();

    const responseEndPointEvents = await middlewareInstance.get("/events", {
      params: { populate: "*" },
    });

    const responseEndPointCategory = await middlewareInstance.get("/articles", {
      params: { populate: "*" },
    });

    const responseEndPointMenu = await middlewareInstance.get("/dishes", {
      params: { populate: "*" },
    });


    console.log("✅ Datos obtenidos correctamente");
    
    const requestHeaders = new Headers(request.headers);

    requestHeaders.set(
      "x-backend-events",
      JSON.stringify(responseEndPointEvents.data.data || [])
    );
    requestHeaders.set(
      "x-backend-category",
      JSON.stringify(responseEndPointCategory.data.data || [])
    );
    requestHeaders.set(
      "x-backend-menu",
      JSON.stringify(responseEndPointMenu.data.data || [])
    );

    
    requestHeaders.set(
      "x-backend-response-events",
      JSON.stringify({
        data: responseEndPointEvents.data.data,
        meta: responseEndPointEvents.data.meta,
        status: responseEndPointEvents.status,
      })
    );

    requestHeaders.set(
      "x-backend-response-categorys",
      JSON.stringify({
        data: responseEndPointCategory.data.data,
        meta: responseEndPointCategory.data.meta,
        status: responseEndPointCategory.status,
      })
    );

    requestHeaders.set(
      "x-backend-response-menu",
      JSON.stringify({
        data: responseEndPointMenu.data.data,
        meta: responseEndPointMenu.data.meta,
        status: responseEndPointMenu.status,
      })
    );

    requestHeaders.set("x-backend-fetched-at", new Date().toISOString());

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  } catch (error: any) {
    console.error("❌ Error en middleware con axios:", error.message);

    const errorDetails = {
      message: error.message,
      status: error.EndPointEvents?.status | error.EndPointEvents?.status,
      data: error.EndPointEvents?.data,
    };

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-backend-error", JSON.stringify(errorDetails));

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }
}

export const config = {
  matcher: ["/", "/events/:path*", "/home"],
};
