SELECT "a"."line1", "ci"."name" AS "city", "a"."district", "co"."name" AS "country"
    FROM "addresses" AS "a"
    JOIN "cities" AS "ci" using ("cityId")
    JOIN "countries" AS "co" using ("countryId");
