import React from 'react'
import { SearchInput } from '../../components/Search_input/SearchInput'

export const Navigation = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-27.750945 -13.120125 240.50819 78.72075"><path d="M9.5263.182C5.7383 1.7671 1.573 6.2405.2583 11.8671-1.4097 18.99 5.525 21.998 6.0916 21.0166c.6667-1.164-1.2466-1.5547-1.6373-5.248-.5027-4.776 1.712-10.112 4.5067-12.4534.5213-.428.496.176.496 1.2894 0 2.008-.112 19.9733-.112 23.724 0 5.0773-.208 6.676-.592 8.2546-.3774 1.6054-.988 2.688-.528 3.1094.5213.4653 2.736-.6427 4.02-2.4347 1.536-2.1467 2.0773-4.7267 2.1773-7.5267.1133-3.372.1067-8.7333.1133-11.7853 0-2.8067.044-11.012-.044-15.952C14.4663.786 11.1063-.4794 9.5263.182m174.644 26.6547c-.5414 0-.7987.5666-1.0067 1.5173-.7173 3.316-1.472 4.064-2.448 4.064-1.088 0-2.064-1.6413-2.3213-4.9267-.1947-2.58-.164-7.3373.088-12.0693.0507-.9693-.2147-1.9307-2.82-2.8813-1.1254-.4027-2.756-1.0067-3.5667.956-2.2973 5.532-3.1907 9.936-3.4053 11.7173-.005.0933-.1187.1067-.1387-.1067-.1307-1.4293-.4333-4.028-.4707-9.4906-.0133-1.056-.2333-1.9694-1.416-2.712-.7613-.4774-3.0773-1.3334-3.9146-.32-.7174.8306-1.5534 3.0586-2.428 5.7013-.7054 2.152-1.196 3.612-1.196 3.612s.005-5.8027.0187-8.0053c0-.8307-.5667-1.1067-.736-1.1574-.7747-.2266-2.304-.5973-2.9453-.5973-.7987 0-.988.4467-.988 1.0947 0 .0813-.132 7.632-.132 12.912v.7426c-.4347 2.4294-1.868 5.7267-3.4227 5.7267-1.5547 0-2.2907-1.3787-2.2907-7.6707 0-3.6693.1134-5.2666.164-7.9226.0307-1.5294.0933-2.7054.088-2.976-.0133-.812-1.4293-1.228-2.084-1.3787-.66-.1573-1.2333-.208-1.6853-.1893-.6293.0386-1.076.4533-1.076 1.0333v.88c-.812-1.2827-2.128-2.1773-3.008-2.4347-2.3533-.6986-4.8147-.076-6.6707 2.516-1.472 2.0654-2.36 4.3987-2.7053 7.7534-.2587 2.4546-.176 4.94.2827 7.0413-.5534 2.372-1.5734 3.348-2.6867 3.348-1.624 0-2.7933-2.644-2.6613-7.2187.0947-3.0066.692-5.1146 1.352-8.1733.284-1.3027.0507-1.9813-.5214-2.6427-.5226-.592-1.6426-.9-3.2466-.5293-1.14.2707-2.7814.56-4.2734.7813 0 0 .088-.36.164-.9946.384-3.3294-3.2346-3.0587-4.3866-1.9947-.692.6347-1.164 1.384-1.34 2.7307-.2827 2.14 1.46 3.1466 1.46 3.1466-.572 2.6174-1.9694 6.04-3.4227 8.5134-.7747 1.328-1.3667 2.304-2.1333 3.348-.007-.384-.007-.7747-.007-1.1574-.0133-5.5066.056-9.8413.088-11.4026.032-1.5294.0947-2.6747.0947-2.9454-.0133-.592-.3587-.824-1.0894-1.1013-.6413-.2507-1.4026-.4333-2.1893-.4973-.988-.0747-1.592.4533-1.5733 1.076v.8373c-.8174-1.2827-2.1334-2.1773-3.0014-2.4347-2.36-.6986-4.82-.076-6.676 2.516-1.4666 2.0654-2.436 4.9534-2.7133 7.7214-.2507 2.5933-.2067 4.7826.1453 6.6333-.3773 1.8493-1.4533 3.788-2.6733 3.788-1.5547 0-2.4427-1.3787-2.4427-7.6707 0-3.6693.1134-5.2666.1707-7.9226.0307-1.5294.088-2.7054.0813-2.976-.0067-.812-1.4213-1.228-2.0826-1.3787-.6854-.1627-1.284-.2133-1.7374-.1893-.604.0506-1.0253.5853-1.0253.9946v.9187c-.8173-1.2827-2.1333-2.1773-3.008-2.4347-2.3533-.6986-4.7947-.0626-6.664 2.516-1.22 1.6814-2.208 3.5494-2.7173 7.6907-.1387 1.196-.208 2.3147-.2014 3.36-.4853 2.9693-2.6306 6.3933-4.38 6.3933-1.032 0-2.0133-1.9893-2.0133-6.236 0-5.6506.352-13.7053.4147-14.4853 0 0 2.2146-.0387 2.6493-.044 1.1013-.0067 2.108.0187 3.5747-.0573.7426-.0373 1.4533-2.6867.6853-3.02-.34-.1454-2.7813-.2774-3.7507-.296-.8173-.0187-3.0773-.188-3.0773-.188s.2027-5.3427.2467-5.9027c.0373-.4787-.5667-.7173-.9187-.8627-.8507-.364-1.612-.5346-2.5053-.7173-1.252-.2573-1.812-.0053-1.9187 1.044-.164 1.5933-.252 6.2627-.252 6.2627-.9187 0-4.0333-.184-4.9467-.184-.848 0-1.768 3.6506-.5906 3.6946 1.3533.0507 3.7.1014 5.26.144 0 0-.0694 8.188-.0694 10.7107v.78c-.8613 4.4733-3.876 6.8907-3.876 6.8907.648-2.964-.6733-5.1854-3.064-7.06-.8813-.6987-2.6173-2.0147-4.5626-3.4427 0 0 1.1266-1.1133 2.1266-3.3413.7054-1.58.7374-3.3974-1-3.7947-2.8693-.66-5.2293 1.448-5.94 3.7-.5413 1.7373-.2573 3.0333.8174 4.3733l.2453.3027c-.6413 1.2453-1.5347 2.9253-2.284 4.228-2.0947 3.6187-3.6747 6.476-4.864 6.476-.956 0-.944-2.9013-.944-5.62 0-2.3413.176-5.8707.3147-9.52.044-1.2027-.56-1.8947-1.572-2.5173-.6174-.3774-1.9267-1.12-2.688-1.12-1.132 0-4.4174.1506-7.5187 9.1173-.3907 1.1333-1.1587 3.1907-1.1587 3.1907l.0694-10.7854c0-.252-.132-.4906-.44-.6613-.5227-.2827-1.9254-.8613-3.1587-.8613-.5987 0-.8947.2773-.8947.824l-.1 16.864c0 1.284.0307 2.7813.1574 3.436.1253.6546.3333 1.1893.5853 1.5093.252.3093.5467.548 1.0253.6547.4467.0946 2.9067.4026 3.0334-.5347.1573-1.1267.1626-2.34 1.4533-6.8893 2.0133-7.0734 4.632-10.5214 5.8653-11.7494.22-.2133.4654-.2266.452.1267-.056 1.5533-.2386 5.424-.364 8.7147-.3333 8.816 1.264 10.4453 3.5614 10.4453 1.7493 0 4.216-1.7427 6.8653-6.1467 1.6547-2.7506 3.2533-5.4373 4.4107-7.3813.7933.7413 1.6986 1.5413 2.5986 2.3973 2.096 1.9814 2.7814 3.8694 2.3227 5.6574-.3467 1.3706-1.6613 2.78-3.996 1.4093-.68-.3973-.9693-.7053-1.6547-1.1587-.3653-.2453-.932-.3146-1.2653-.0626-.8813.6613-1.3787 1.4973-1.668 2.536-.2707 1.0133.7427 1.5413 1.7933 2.0066.9.4094 2.8387.768 4.0774.812 4.8266.164 8.6906-2.328 11.3773-8.7466.4853 5.544 2.5293 8.684 6.0853 8.684 2.384 0 4.7694-3.0774 5.8147-6.104.2947 1.2333.7413 2.3026 1.3147 3.216 2.744 4.3413 8.0666 3.4106 10.7346-.2774.8307-1.1453.9574-1.5546.9574-1.5546.3893 3.4813 3.196 4.7066 4.8013 4.7066 1.8053 0 3.656-.8546 4.9573-3.788.1574.3214.3214.624.5107.9134 2.7373 4.3413 8.06 3.4106 10.7347-.2774.12-.1826.2333-.3333.3266-.4786l.0827 2.2906s-1.5293 1.3974-2.4666 2.2587c-4.1214 3.7827-7.256 6.652-7.488 9.9867-.2894 4.26 3.1586 5.84 5.776 6.0466 2.7693.2214 5.148-1.308 6.6066-3.46 1.284-1.888 2.128-5.9466 2.0654-9.9613-.0253-1.6107-.064-3.6493-.1014-5.8453 1.4534-1.6734 3.0894-3.8014 4.588-6.292 1.6414-2.7067 3.3907-6.3507 4.284-9.188 0 0 1.5294.0133 3.1534-.088.5226-.032.6733.076.572.4533-.1134.4587-2.0507 7.9413-.2827 12.9253 1.2147 3.4094 3.9387 4.5107 5.5627 4.5107 1.8933 0 3.7066-1.4347 4.6746-3.5613.12.2333.24.4653.3787.68 2.7373 4.3413 8.0413 3.404 10.7347-.2774.6106-.836.9506-1.5546.9506-1.5546.5787 3.6066 3.3854 4.72 4.9894 4.72 1.68 0 3.2653-.6854 4.556-3.732.0507 1.3413.132 2.436.2706 2.7813.0813.2147.56.4787.9.6107 1.5347.5666 3.096.296 3.668.176.4027-.0814.7174-.396.756-1.2267.112-2.1773.0427-5.8333.704-8.5573 1.1134-4.556 2.1454-6.324 2.636-7.1987.272-.492.5854-.5733.592-.0573.0187 1.0506.076 4.1346.5094 8.288.3093 3.0453.7306 4.8506 1.0573 5.424.9187 1.6293 2.064 1.7053 2.9893 1.7053.592 0 1.8254-.164 1.7174-1.2027-.056-.5026.0387-3.6306 1.1266-8.1226.7174-2.9387 1.9067-5.588 2.3347-6.5574.164-.3586.2333-.0813.2333-.0253-.0947 2.02-.296 8.6333.5214 12.2453 1.1213 4.9027 4.348 5.4494 5.4746 5.4494 2.3974 0 4.368-1.8254 5.028-6.632.164-1.1587-.076-2.052-.7866-2.052M83.558 23.8672c-.132 2.5414-.6294 4.6694-1.4214 6.2107-1.448 2.8-4.2973 3.6813-5.5506-.352-.912-2.9133-.604-6.8907-.22-9.0373.5533-3.184 1.9573-5.436 4.1466-5.2294 2.24.2214 3.3347 3.1094 3.0454 8.408m21.9549.0374c-.1254 2.3973-.748 4.8133-1.428 6.1733-1.4027 2.8187-4.336 3.7-5.5507-.352-.8293-2.776-.6347-6.356-.22-8.6093.536-2.932 1.8253-5.6574 4.148-5.6574 2.2587 0 3.372 2.48 3.0507 8.4454m.5733 16.3853c-.032 4.3867-.7173 8.2253-2.1907 9.3453-2.1013 1.5854-4.9266.3894-4.3413-2.8066.516-2.832 2.964-5.72 6.5387-9.2507 0 0 .012.8053-.007 2.712m37.907-16.36c-.1267 2.6373-.712 4.6947-1.4347 6.148-1.404 2.8187-4.3107 3.6933-5.5507-.352-.6733-2.2093-.7053-5.8973-.22-8.9733.4907-3.1347 1.8694-5.5 4.1467-5.2934 2.252.2147 3.304 3.1094 3.0587 8.4707" fill="#231e1f"/></svg>
        </div>
        <SearchInput />
        <ul>
            <li>
              <svg aria-label="Trang chủ" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M9.005 16.545a2.997 2.997 0 012.997-2.997h0A2.997 2.997 0 0115 16.545V22h7V11.543L12 2 2 11.543V22h7.005z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </li>
            <li>
              <svg aria-label="Messenger" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12.003 2.001a9.705 9.705 0 110 19.4 10.876 10.876 0 01-2.895-.384.798.798 0 00-.533.04l-1.984.876a.801.801 0 01-1.123-.708l-.054-1.78a.806.806 0 00-.27-.569 9.49 9.49 0 01-3.14-7.175 9.65 9.65 0 0110-9.7z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.739"></path><path d="M17.79 10.132a.659.659 0 00-.962-.873l-2.556 2.05a.63.63 0 01-.758.002L11.06 9.47a1.576 1.576 0 00-2.277.42l-2.567 3.98a.659.659 0 00.961.875l2.556-2.049a.63.63 0 01.759-.002l2.452 1.84a1.576 1.576 0 002.278-.42z" fillRule="evenodd"></path></svg>
            </li>
            <li>
              <svg aria-label="Bài viết mới" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line></svg>
            </li>
            <li>
              <svg aria-label="Tìm người" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon><polygon fillRule="evenodd" points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"></polygon><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>
            </li>
            <li>
              <svg aria-label="Nguồn cấp dữ liệu hoạt động" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
            </li>
            <li>
              <img alt="Ảnh đại diện của _quangminhdo" className="login_avatar circle"  src='/images/avatar.jpg' />
            </li>
        </ul>
    </div>
  )
}
