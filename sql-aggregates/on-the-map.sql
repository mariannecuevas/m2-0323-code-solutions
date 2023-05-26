SELECT "c"."name" AS "country", COUNT(*) AS "cityCount"
    FROM "countries" AS "c"
    JOIN "cities" AS "ci" using ("countryId")
    GROUP by "c"."name";
