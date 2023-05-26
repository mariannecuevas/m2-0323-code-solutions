SELECT "p"."amount", "c"."firstName", "c"."lastName"
    FROM "payments" AS "p"
    JOIN "customers" AS "c" using ("customerId")
    ORDER BY "p"."amount" DESC
    LIMIT 10;
