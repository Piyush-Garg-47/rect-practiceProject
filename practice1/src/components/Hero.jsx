const HeroSection =() =>{
     return(
       <main className="hero container">
         <div className="hero-content">
            <h1>YOUR FEET DESERVE BEST </h1>
            <p> YOUR FEET DESERVE BEST AND WE ARE HERE TO HELP YOU WHITH OUR SHOES YOUR FEET DESERVE BEST AND WE ARE HERE TO HELP YOU WHITH OUR SHOES </p>
            <div className="hero-buttons"> 
                <button>Shop now</button>
                <button>Category</button>
            </div>
            <div className="shoping">
                <p> Also availabe on </p>
                <div className="brand-icons">
                 <img src="data:image/jpeg;base64,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" alt="amazone logo" />
                 <img src="data:image/jpeg;base64,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" alt="flipkart logo" />
                </div>
            </div>
         </div>
         <div className="hero-image">
            <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQTMTN6bNxu6akzzF1xJ-E0rf14mTDnd6KfQY3rQ42GyDwBR5YeNc3jlhEPwh34d27JNshlmzdijQzuCCjZOuk0Gdu6E7iNg8An9AcwZEj8TasK8Ga4OCoovw&usqp=CAE" alt="shoes image" />
         </div>
       </main>
     );
}
export default HeroSection ; 