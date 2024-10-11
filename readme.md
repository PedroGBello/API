# NODE - REST API

**_Pedro G. Bello_**

> [!IMPORTANT]
> > ### Dependencias:
> Instalar NODE MODULES y las dependencias _Mongoose_, _Express_, _Bcrypt_, _JsonWebToken_ y _Helmet_.

> [!NOTE]
> ### Pasos a seguir:
>
> 1. Registrarse en http://localhost:3000/api/v1/auth/register
> 2. Iniciar sesión en http://localhost:3000/api/v1/auth/login
> 3. Copiar Access Token para realizar cambios en la DB
> 4. Crear documentos, siguiendo el modelo a continuación - Mock Data (Music)
> 5. Pueden realizarse operaciones como READ, UPDATE, DELETE, y GET by query params en http://localhost:3000/api/v1/music

### Mock Data (Music):

```
{
	"title": "God Put a Smile Upon Your Face",
	"artist": "Coldplay",
	"album": "A Rush of Blood to the Head",
	"year": 2002,
	"genre": ["Alternative Rock"],
	"poster": "https://i.scdn.co/image/ab67616d0000b273de09e02aa7febf30b7c02d82",
	"duration": 298
}
{
	"title": "Wake Up",
	"artist": "Rage Against the Machine",
	"album": "Rage Against the Machine",
	"year": 1992,
	"genre": ["Hard Rock"],
	"poster": "https://i.scdn.co/image/ab67616d0000b2733265d04433744993547ecfc7",
	"duration": 364
}
{
	"title": "Style (Taylor's Version)",
	"artist": "Taylor Swift",
	"album": "1989",
	"year": 2023,
	"genre": ["Synth Pop", "Pop Rock"],
	"poster": "https://i.scdn.co/image/ab67616d0000b273904445d70d04eb24d6bb79ac",
	"duration": 231
}
```

### Mock Data (User):

```
{
	"fullName": "John Doe",
	"email": "john@example.com",
	"password": "abc-123"
}
```
