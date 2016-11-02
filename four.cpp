#include<iostream>
#include<string>
using namespace std;

template <class value>
void absolute(value &y)
{
	int z ;
	
	if(y<0)
	{
		y = y * -1 ;
		cout<< y ;
	}
	else
	cout<<y;

}


int main()
{
	int x ;
	
	cout<<"input a number = " ;
	cin>>x ;
	
	absolute(x);
	
	return 0;
}
