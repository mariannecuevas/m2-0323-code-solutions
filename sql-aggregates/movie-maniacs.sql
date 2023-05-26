SELECT "c"."firstName", "c"."lastName", SUM("p"."amount") AS "totalPaid"
    FROM "customers" AS "c"
    JOIN "rentals" AS "r" using ("customerId")
    JOIN "payments" AS "p" using ("rentalId")
    GROUP BY "c"."firstName", "c","lastName"
    ORDER BY "totalPaid" DESC;
