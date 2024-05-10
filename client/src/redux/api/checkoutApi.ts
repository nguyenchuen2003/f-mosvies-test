import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const checkoutApi = createApi({
    reducerPath: "checkout",
    tagTypes: ["Checkout"],
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL,
        fetchFn: async (...arg) => {
            return await fetch(...arg);
        },
    }),
    endpoints: (build) => ({
        getShowTimeByMovie: build.query({
            query: (movieId) => `/showtimes/${movieId}`,
            providesTags: ["Checkout"],
        }),
        getSeatsByShowTime: build.query({
            query: (showtimeId) => `/seats/${showtimeId}`,
            providesTags: ["Checkout"],
        }),
        checkoutBooking: build.mutation({
            query: (booking) => ({
                url: `/bookings`,
                method: "POST",
                body: booking,
            }),
            invalidatesTags: ["Checkout"],
        }),
        getAllBookings: build.query({
            query: () => `/bookings`,
            providesTags: ["Checkout"],
        }),
        getAllSeatBooking: build.query({
            query: ({ status, user_id }) => ({
                url: `seat-booking`,
                method: "GET",
                params: { status, user_id },
            }),
            providesTags: ["Checkout"],
        }),
        getBookingById: build.query({
            query: (id) => `/bookings/${id}`,
            providesTags: ["Checkout"],
        }),
        getBookingsByUser: build.query({
            query: (userID) => `/bookings/user/${userID}`,
        }),
        updateSeatStatus: build.mutation({
            query: (seat) => ({
                url: `seat-reservation`,
                method: "POST",
                body: seat,
            }),
            invalidatesTags: ["Checkout"],
        }),
        updateSeatBooked: build.mutation({
            query: (seat) => ({
                url: `seat-booked`,
                method: "POST",
                body: seat,
            }),
            invalidatesTags: ["Checkout"],
        }),
        updateSatisfied: build.mutation({
            query: (booking) => ({
                url: `/satisfied-booking/${booking.key}`,
                method: "POST",
                body: booking,
            }),
            invalidatesTags: ["Checkout"],
        }),
        updateNotYet: build.mutation({
            query: (booking) => ({
                url: `/not-yet-booking/${booking.key}`,
                method: "POST",
                body: booking,
            }),
            invalidatesTags: ["Checkout"],
        }),
        updateCancel: build.mutation({
            query: (booking) => ({
                url: `/cancel-booking/${booking.key}`,
                method: "POST",
                body: booking,
            }),
            invalidatesTags: ["Checkout"],
        }),
        softDeleteBooking: build.mutation({
            query: (booking_id) => ({
                url: `/change-level-booking`,
                method: "POST",
                body: booking_id,
            }),
            invalidatesTags: ["Checkout"],
        }),
        getBookingsSoft: build.query({
            query: () => `/booking-in-trash`,
            providesTags: ["Checkout"],
        }),
        getBookingByBooking_Id:build.query({
            query:(booking_id)=>`get-booking-by-bookingid/${booking_id}`,
            providesTags:["Checkout"]
        })
    }),
});

export const {
    useGetShowTimeByMovieQuery,
    useGetSeatsByShowTimeQuery,
    useCheckoutBookingMutation,
    useGetAllBookingsQuery,
    useGetAllSeatBookingQuery,
    useUpdateSeatStatusMutation,
    useUpdateSeatBookedMutation,
    useUpdateNotYetMutation,
    useUpdateSatisfiedMutation,
    useGetBookingByIdQuery,
    useSoftDeleteBookingMutation,
    useGetBookingsSoftQuery,
    useGetBookingByBooking_IdQuery,
    useGetBookingsByUserQuery,
    useUpdateCancelMutation
} = checkoutApi;
export const checkoutReducer = checkoutApi.reducer;
export default checkoutApi;
