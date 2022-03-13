const images = [
    {
        id:0,
        img:"https://assets-global.website-files.com/61cda68a44d8582ffab97e14/61cda68a44d8584d1cb986bd_Hire%20in%20Maldives%201000x500.jpg"
    },
    {
        id:1,
        img:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cb2f2ecd-0d78-452f-b1b3-a29cfe21cd03/d5qrlhm-726c859d-9093-4463-b7c4-1f27d60b8536.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NiMmYyZWNkLTBkNzgtNDUyZi1iMWIzLWEyOWNmZTIxY2QwM1wvZDVxcmxobS03MjZjODU5ZC05MDkzLTQ0NjMtYjdjNC0xZjI3ZDYwYjg1MzYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.qOhb9WsjYDZf5lvH7rg1R1XFA-uNF-EBZVTgx_DMRyM"
    }, 
    {
        id: 2,
        img: "https://www.teahub.io/photos/full/51-518770_maths-pics.jpg"
    },
    {
        id: 3,
        img: "https://worldmapper.org/wp-content/uploads/2021/10/CO2_animation_header-1-1000x500.png"
    },
    {
        id: 4,
        img: "https://images.squarespace-cdn.com/content/v1/59fe0514017db2ab70a8cb66/1516846000588-KJR3XY2E24W2L9LBTFI6/dlr-img-ops-cattle-1000x500-1.jpg"
    },
    {
        id: 5,
        img: "https://asiapacificcurriculum.ca/sites/default/files/styles/full_width/public/2019-04/Urbanization%20image-B-1000x500.jpg?itok=FcJTgnb5"
    },
    {
        id: 6,
        img: "https://www.qatarairwaysholidays.com/qa-en/images/1000x500-doha-night"
    },
    {
        id:7,
        img:"https://www.mddionline.com/sites/mddionline.com/files/E5TH2D_main.jpg"
    },
    {
        id:8,
        img:"https://assets-global.website-files.com/61cda68a44d8582ffab97e14/61cda68a44d8584d1cb986bd_Hire%20in%20Maldives%201000x500.jpg"
    },
    {
        id:9,
        img:"https://www.ultimatekilimanjaro.com/blog/wp-content/uploads/2019/12/shutterstock_619046276-1000x500.jpg"
    },
    {
id:10,
        img:"https://www.fsc.org.nz/hs-fs/hubfs/FSC%20Corporate/Images/Outlook%20Lighthouses/Topic%20Card%20OUTLOOK%2022%201000x500%20B.jpg?width=1000&height=500&name=Topic%20Card%20OUTLOOK%2022%201000x500%20B.jpg"
},
{
    id:11,
    img:"https://cdn.sanity.io/images/0vv8moc6/drugtopics/85f4059730acd83cee0e303e9f14e2e8e9c33e57-1000x500.png"
    }, 
{
    id:12,
        img:"https://psychology.org.au/getmedia/e273fd67-40d5-4e85-8897-ebe2966f8c21/21InPsych-FebMar-p8-seaice-Mawson-1000x500.jpg?width=1000&height=500&ext=.jpg"
}
]



let initialValue = 0;

function Next(){
    initialValue++;
    if(initialValue>images.length){
        initialValue=0;
        document.getElementById("image").src ="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/new-rolex-2020-1598954484.jpg"
    }
    document.getElementById("image").src=images[initialValue].img;
}

function Previous(){
    --initialValue;
    if(initialValue<=0){
        initialValue=0
    }
    document.getElementById("image").src=images[initialValue].img;
}