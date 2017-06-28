//POST register / update()

http -p HBhb POST localhost:8001/register password='Meghan' firstName='Meghan' lastName="Prestemon" email='m.m.hares@gmail.com'

http -p HBhb POST localhost:8001/register password='Meghan' firstName='Mehan' lastName="Prstemon" email='m.m.hres@gmail.com'

http -p HBhb POST localhost:8001/users/2 author='Changed author'



//POST login
http -p HBhb POST localhost:8001/login password='Meghan' email='m.m.hares@gmail.com'

http -p HBhb GET localhost:8001/favorites/
http -p HBhb GET localhost:8001/favorites/2
//bad - index too low
http -p HBhb POST localhost:8001/favorites/2
http -p HBhb POST localhost:8001/favorites/-1 cover_url='Changed URL'
//bad - index nan
http -p HBhb POST localhost:8001/books/hi cover_url='Changed URL'

//DELETE remove()
http -p HBhb DELETE localhost:8001/books/10

/*** USERS ***/
//POST / register()
http -p HBhb POST :8001/users first_name='John' last_name='Siracusa' email='john.siracusa@gmail.com'  password='ilikebigcats'

/*** TOKEN ***/
http -p HBhb POST :8001/token email='jkrowling@gmail.com' password='youreawizard'

http -p HBhb GET :8001/token
