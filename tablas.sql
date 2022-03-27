-- public."Cars" definition

-- Drop table

-- DROP TABLE public."Cars";

CREATE TABLE public."Cars" (
	id serial NOT NULL,
	name varchar(255) NULL,
	"createdAt" timestamptz NOT NULL,
	"updatedAt" timestamptz NOT NULL,
	CONSTRAINT "Cars_pkey" PRIMARY KEY (id)
);

-- public."Departments" definition

-- Drop table

-- DROP TABLE public."Departments";

CREATE TABLE public."Departments" (
	id serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"createdAt" timestamptz NOT NULL,
	"updatedAt" timestamptz NOT NULL,
	CONSTRAINT "Departments_pkey" PRIMARY KEY (id)
);

-- public."Cities" definition

-- Drop table

-- DROP TABLE public."Cities";

CREATE TABLE public."Cities" (
	id serial NOT NULL,
	"name" varchar(255) NULL,
	dpartmentsid int4 NULL,
	"createdAt" timestamptz NOT NULL,
	"updatedAt" timestamptz NOT NULL,
	CONSTRAINT "Cities_pkey" PRIMARY KEY (id)
);


-- public."Cities" foreign keys

ALTER TABLE public."Cities" ADD CONSTRAINT "Cities_dpartmentsid_fkey" FOREIGN KEY (dpartmentsid) REFERENCES public."Departments"(id);

-- public."Clients" definition

-- Drop table

-- DROP TABLE public."Clients";

CREATE TABLE public."Clients" (
	id serial NOT NULL,
	"name" varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	phone varchar(255) NOT NULL,
	carid int4 NOT NULL,
	cityid int4 NOT NULL,
	"createdAt" timestamptz NOT NULL,
	"updatedAt" timestamptz NOT NULL,
	CONSTRAINT "Clients_pkey" PRIMARY KEY (id)
);


-- public."Clients" foreign keys

ALTER TABLE public."Clients" ADD CONSTRAINT "Clients_carid_fkey" FOREIGN KEY (carid) REFERENCES public."Cars"(id);
ALTER TABLE public."Clients" ADD CONSTRAINT "Clients_cityid_fkey" FOREIGN KEY (cityid) REFERENCES public."Cities"(id);

