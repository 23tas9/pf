import StarRating from "./StarRating.tsx";

export default function About() {
    const GetMyAge = () =>{
        const today = new Date();

        const thisYearMyBirthday = new Date(today.getFullYear(),
            12 - 1,
            29
        );
        
        const age = today.getFullYear() - 2003 - (today < thisYearMyBirthday ? 1:0);

        return age;
    };

    const AboutMe = [
        {
            display: "名前",
            value: "西口 侑(ニシグチ タスク)"
        },
        {
            display: "年齢",
            value: GetMyAge()
        },
        {
            display: "所属",
            value: "大阪電気通信大学 総合情報学部 デジタルゲーム学科"
        },
        {
            display: "GitHub",
            value: "tas9n",
            link: "https://github.com/tas9n"
        }
    ];

    const Skills = [
        {
            display: "C++",
            image: "/image/logo/cpp.png",
            since: 2020,
            mastery: 5,
            about: "foo"
        },
        {
            display: "Java Script",
            image: "/image/logo/js.png",
            since: 2019,
            mastery: 4,
            about: "foo"
        },
        {
            display: "OpenSiv3D",
            image: "/image/logo/siv3d.png",
            since: 2021,
            mastery: 4,
            about: "foo"
        },
        {
            display: "Unity",
            image: "/image/logo/unity.png",
            since: 2022,
            mastery: 3,
            about: "foo"
        }
    ]

    return (
        <div className="about content">
            <h2 id="about">About</h2>
            <table>
                <thead>
                    <tr>
                        <th colspan="2">私について</th>
                    </tr>
                </thead>
                <tbody>
                    {AboutMe.map((item)=>(
                        <tr>
                            <td>{item.display}</td>
                            <td>{
                                item.link
                                ? <a href={item.link}>{item.value}</a>
                                : item.value
                            }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>スキル</th>
                        <th>経験年数</th>
                        <th>熟練度</th>
                        <th>活動など</th>
                    </tr>
                </thead>
                <tbody>
                    {Skills.map((item)=>(
                        <tr>
                            <td><img src={item.image} alt={`${item.display}のアイコン`} width="48" /></td>
                            <td>{item.display}</td>
                            <td>{new Date().getFullYear() - item.since}</td>
                            <td><StarRating rating={item.mastery}/> </td>
                            <td>{item.about}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}