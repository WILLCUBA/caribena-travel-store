const productsContainerEl = $("#products-container")


var products = [
    {
        img : "https://i5.walmartimages.com/asr/ccd6b92c-8b8b-45ca-a224-6f8dccc57198.b944af3b603bd54793cb8954dc04cb66.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        title : "Nexium",
        description: "Acid Reducer Heartburn Relief Esomeprazole Magnesium-42",
        price: "18.50",
        category:"Stomach"
    },
    {
        img : "https://i5.walmartimages.com/asr/68d7aa5d-a43c-4d60-af0f-dc83cc766e7b.e7e68c9bccebbdd4be127389aafc614c.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        title : "Benadryl Allergy",
        description: "Diphenhydramine HCI 25mg Benadryl",
        price: "4.00",
        category:"Allergy"
    },
    {
        img : "https://i5.walmartimages.com/asr/489c4c71-252d-4183-aaf5-4a0efe1a641b.e3e89ac112f8c5a6443e4ec4b3a6bbd8.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        title : "Simethicone Gas-X",
        description: "Simethicone Gas-X 18 Chewable Tablets",
        price: "2.00",
        category: "Stomach"
    },
    {
        img : "https://i5.walmartimages.com/asr/2f00bd46-2a78-47c2-a811-3b6622709bd8.4add0ef0e6482d850d5e848397c91e85.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        title : "Hemorrhoidal Ointment",
        description: "Preparation H Hemorrhoidal Ointment 1 Oz",
        price: "4.00",
        category:"Hemorrhoidal"
    },
    {
        img : "https://i5.walmartimages.com/asr/a7b7a6bc-0996-4d30-b3a0-8511445074fd_1.6637859825f8464977fcb122245ae6dc.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        title : "Imodium",
        description: "Diarrhea Relief Caplets, Loperamide Hydrochloride, 6 ct",
        price: "1.70",
        category:"Stomach"
    },
    {
        img : "https://i5.walmartimages.com/asr/806b3c75-e2aa-4dc7-ab2c-bfe57955f27a.5432abb68b7fe65eadc1bf134f0d3326.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        title : "Red Yeast Rice",
        description: "Red Yeast Rice, 600 mg, 60 count",
        price: "4.20",
        category:"Dietary Supplements"
    },
    {
        img : "https://i5.walmartimages.com/asr/afa102e6-c0e8-42f6-861a-3c5890a44e9e.290b5c052b9ad3fa524de4c6e033c137.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        title : "Vitamin D3",
        description: "Vitamin D3 100 count, 25 mcg",
        price: "2.10",
        category:"Vitamin"
    },
    {
        img : "https://i5.walmartimages.com/asr/5b8c5299-aaa0-40cd-a168-a55fb3690bb1.83f257d7c0e1783882b9bc1cd27220cf.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        title : "Vitamin D3",
        description: "Vitamin D3 200 count, 50 mcg",
        price: "4.00",
        category:"Vitamin"
    },
    {
        img : "https://i5.walmartimages.com/asr/740d1114-47fd-4284-a8e9-95b63c0fb981.649a861c45cd0e0e9cc2cf0cfc9b672f.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        title : "Vitamin C",
        description: "Vitamin C 1000mg 250 count",
        price: "6.20",
        category:"Vitamin"
    },
    {
        img : "https://i5.walmartimages.com/asr/a3544eaa-3439-4fe9-960b-24674223d59c_1.f481f38b79dcda3b4bb36229909985d6.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        title : "MegaRed",
        description : "Mega Red Advanced 4in1 500mg, Concentrated Omega-3 Fish & Krill Oil Supplement 25 ct",
        price:"8.00",
        category: "DietarySuplement"
    },
    {
        img : "https://i5.walmartimages.com/asr/189df33b-2668-4280-8d39-4d6e136f1b23.1c05712a0139b5b7e4e9591fbed37ccf.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        title : "Calcium",
        description : "Spring Valley Calcium Plus Vitamin D3 20 mcg Dietary Supplement, 600 mg, 250 count",
        price: "4.00",
        category: "DietarySuplement"
    },
    {
        img : "https://i5.walmartimages.com/asr/8c5c79b1-0394-4992-b82f-898e38fd83d4.1f59e70f0b06cb19bc35d25c7dbd03de.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        title : "Potassium",
        description : "Spring Valley Potassium Caplets, 99 mg, 250 Ct",
        price: "3.00",
        category: "DietarySuplement"
    },
    {
        img : "https://i5.walmartimages.com/asr/443d8a8e-dcf6-48f3-88ff-7f9f348ffd95.40f4fb7bc1c3c2d36fb16b330575fba6.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        title : "Benadryl Allergy",
        description : "Children's Benadryl Antihistamine Allergy Liquid, Cherry, 8 fl. oz",
        price: "6.00",
        category: "Childrens"
    },
    {
        img : "https://i5.walmartimages.com/asr/6af10b3c-1306-4f00-a5dd-1f051d3a5341_1.271d13466ac9c99770d322cda57fdc7b.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        title : "Ibuprofen Childrens",
        description : "Equate Children's Ibuprofen Oral Suspension, 100 mg per 5 mL, Berry, 8 fl. Oz.",
        price: "4.00",
        category: "Childrens"
    }
]

var listProduct = function(product) {
    for (i = 0; i < product.length;i++) {
        var card = $("<div>").addClass("card").attr("style","width: 18rem;")
        var img = $("<img>").attr("src",product[i].img)
        var cardBody = $("<div>").addClass("card-body")
        var cardTitle = $("<h5>").addClass("card-title").text(product[i].title)
        var cardText = $("<p>").addClass("card-text").text(product[i].description)
        var priceAndCartContainer = $("<div>").addClass("d-flex").addClass("justify-content-between")
        var addCart = $("<button>").addClass("btn").addClass("btn-primary").text("Add to Cart")
        var price = $("<button>").addClass("btn").addClass("btn-primary").addClass("align-self-center").text("$" + product[i].price)
        
        productsContainerEl.append(card)
        card.append(img)
        card.append(cardBody)
        cardBody.append(cardTitle)
        cardBody.append(cardText)
        cardBody.append(priceAndCartContainer)
        priceAndCartContainer.append(addCart)
        priceAndCartContainer.append(price)
    }
}

listProduct(products)
