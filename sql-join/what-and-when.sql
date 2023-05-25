SELECT "f"."releaseYear", "g"."name"
    FROM "films" AS "f"
    JOIN "filmGenre" AS "fg" using ("filmId")
    JOIN "genres" AS "g" using ("genreId")
    WHERE "f"."title" = 'Boogie Amelie';
