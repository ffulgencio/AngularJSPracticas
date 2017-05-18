var app = angular.module("app",[]);

            app.controller("ProductosController", function($scope){

            $scope.valor="Lista de productos";

            $scope.productos = [
                {id:1,Description:"Producto1",precio:12800,cantidad:50},
                {id:2,Description:"Producto2",precio:500,cantidad:200},
                {id:3,Description:"Producto3",precio:1200,cantidad:300}
            ];

             $scope.AgregarProducto =function(id,descripcion, precio, cantidad){
                var prod = new Object()
                    prod.id = id,
                    prod.Description = descripcion,
                    prod.precio = precio,
                    prod.cantidad = cantidad

                
                $scope.productos.push(prod);
            }

            $scope.eliminarProducto = function(id){
               var index = getIndex(id);
         
                $scope.productos.splice(index,1)
            }


            //funcion para encontrar el indice del array
            function getIndex(idx){
                var longi = $scope.productos.length;
                for (var i = 0; i < longi; i++){
                   
                    if ($scope.productos[i].id == idx)
                        return i;
                }
                
                return -1;
            }

            $scope.editarProducto = function(id){
                var index  = getIndex(id);
                $scope.id = $scope.productos[index].id;
                $scope.descripcion = $scope.productos[index].Description;
                $scope.precio = $scope.productos[index].precio;
                $scope.cantidad = $scope.productos[index].cantidad;

            }

            //  $scope.editarProducto = function(id){
            //     var index  = getIndex(id);
            //     $scope.productos[index].id =  $scope.id
            //     $scope.descripcion = $scope.productos[index].Description;
            //     $scope.precio = $scope.productos[index].precio;
            //     $scope.cantidad = $scope.productos[index].cantidad;

            // }


});