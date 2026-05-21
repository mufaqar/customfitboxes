import { NextRequest, NextResponse } from "next/server"

import { sanityFetch } from "@/sanity/lib/live"

import { SEARCH_PRODUCTS_QUERY } from "@/sanity/queries"

export async function GET(req: NextRequest) {

    try {

        const { searchParams } = new URL(req.url)

        const name = searchParams.get("name")

        if (!name) {

            return NextResponse.json(
                {
                    success: false,
                    message: "Search query is required",
                },
                {
                    status: 400,
                }
            )
        }

        const { data: results } = await sanityFetch({
            query: SEARCH_PRODUCTS_QUERY,
            params: {
                search: `*${name}*`,
            },
            perspective: "published",
        })

        return NextResponse.json({
            success: true,
            results,
        })

    } catch (error) {

        console.log(error)

        return NextResponse.json(
            {
                success: false,
                message: "Something went wrong",
            },
            {
                status: 500,
            }
        )
    }
}