SELECT "c"."firstName", "c"."lastName"
    FROM "customers" AS "c"
    JOIN "rentals" AS "r" using ("customerId")
    JOIN "inventory" AS "i" using ("inventoryId")
    JOIN "films" AS "f" using ("filmId")
    WHERE "f"."title" ='Magic Mallrats';
