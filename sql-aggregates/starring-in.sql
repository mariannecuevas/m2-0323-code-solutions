SELECT "g"."name", COUNT(*) AS "movieCount"
    FROM "castMembers" AS "cm"
    JOIN "actors" AS "a" using ("actorId")
    JOIN "films" AS "f" using ("filmId")
    JOIN "filmGenre" AS "fg" using ("filmId")
    JOIN "genres" AS "g" using ("genreId")
    WHERE "a"."firstName" = 'Lisa' AND "a"."lastName" = 'Monroe'
    GROUP BY "g"."name";
