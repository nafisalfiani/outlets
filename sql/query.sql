SELECT b."name" FROM "Brands" b -- get brand names
SELECT o."name", o.address, o.latitude, o.longitude from "Outlets" o -- get outlets
SELECT count(p.id) FROM "Products" p -- total products
-- Outlet distance from Monas Jakarta in Kilometers