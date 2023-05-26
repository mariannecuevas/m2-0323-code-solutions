SELECT "a"."firstName", "a"."lastName"
    FROM "actors" AS "a"
    JOIN "castMembers" AS "cm" using ("actorId")
    JOIN "films" AS "f" using ("filmId")
    WHERE "f"."title" = 'Jersey Sassy';
