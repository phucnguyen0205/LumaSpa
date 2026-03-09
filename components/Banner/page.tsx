export default function Banner() {

return (

<section className="relative h-[500px]">

<img
src="/images/banner.jpg"
className="w-full h-full object-cover"
/>

<div className="absolute inset-0 bg-black/40 flex items-center">

<div className="max-w-7xl mx-auto px-6 text-white">

<h1 className="text-4xl md:text-6xl font-bold mb-4">
LumaSpa Luxury
</h1>

<p className="text-lg mb-6">
Relax your body & mind
</p>

<button className="bg-pink-600 px-6 py-3 rounded-lg">
Book Now
</button>

</div>

</div>

</section>

)

}