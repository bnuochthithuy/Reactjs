function Data(dataName) {
    switch (dataName) {
        case "products":
            const localData = localStorage.getItem("products");
            if (localData) {
                return JSON.parse(localData);
            }
            const products = [
                {
                    id: "1",
                    name: "Áo phông nam",
                    name_category: "Thời trang nam",
                    code: "19381-4141",
                    image: "http://lorempixel.com/640/480/cats",
                    price: "788.00",
                    old_price: "529.00"
                },
                {
                    id: "2",
                    name: "Quần baggy",
                    name_category: "Thời trang nam",
                    code: "81541",
                    image: "http://lorempixel.com/640/480/cats",
                    price: "13.00",
                    old_price: "729.00"
                }
            ];
            return products;
        default:
            return [];
    }
}
export default Data;