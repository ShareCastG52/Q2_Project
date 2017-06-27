//PATCH / update()
http -p HBhb PATCH localhost:8001/users/2 password='Meghan' firstName='Meghan' lastName="Prestemon" email='m.m.hares@gmail.com'
http -p HBhb PATCH localhost:8001/users/2 author='Changed author'
http -p HBhb PATCH localhost:8001/users/2 genre='Changed genre'
http -p HBhb PATCH localhost:8001/users/2 description='Changed desc'
http -p HBhb PATCH localhost:8001/users/2 cover_url='Changed URL'

//PATCH bad - index too high
http -p HBhb PATCH localhost:8001/books/999 cover_url='Changed URL'
//bad - index too low
http -p HBhb PATCH localhost:8001/books/-1 cover_url='Changed URL'
//bad - index nan
http -p HBhb PATCH localhost:8001/books/hi cover_url='Changed URL'

//DELETE remove()
http -p HBhb DELETE localhost:8001/books/10

/*** USERS ***/
//POST / register()
http -p HBhb POST :8001/users first_name='John' last_name='Siracusa' email='john.siracusa@gmail.com'  password='ilikebigcats'

/*** TOKEN ***/
http -p HBhb POST :8001/token email='jkrowling@gmail.com' password='youreawizard'

http -p HBhb GET :8001/token
