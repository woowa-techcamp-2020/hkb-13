export class ReportsList extends HTMLElement {
  constructor() {
    super()
    this.setElements()
  }

  connectedCallback() {
    this.initEvents()
  }

  initEvents() {}

  setElements() {
    this.innerHTML = `
    <main class="reports-page">
    <section class="list-section">
      <div class="daily-reports">
        <div class="report-header">
          <div class="day">6월 16일 화</div>
          <!-- <div class="daily-total">
            <div class="plus">+26,000원</div>
            <div class="minus">-13,000원</div>
          </div> -->
        </div>
        <div class="report-body">
          <div class="row">
            <i class="icon category-icon shop" title="쇼핑/뷰티">cart</i>
            <div class="description">미용실</div>
            <div class="payment">현대카드</div>
            <div class="price minus">-20,000원</div>
          </div>
          <div class="row">
            <i class="icon category-icon money" title="월급">money_dollar</i>
            <div class="description">월급</div>
            <div class="payment">국민은행</div>
            <div class="price plus">+2,750,000원</div>
        </div>
      </div>
      </div>
      <div class="daily-reports">
        <div class="report-header">
          <div class="day">6월 15일 화</div>
          <!-- <div class="daily-total">
            <div class="plus">+26,000원</div>
            <div class="minus">-13,000원</div>
          </div> -->
        </div>
        <div class="report-body">
          <div class="row">
            <!-- <i class="icon category-icon food" title="식비">poultry_leg</i> -->
            <i class="icon category-icon food" title="식비">tray</i>
            <div class="description">BBQ 황금올리브</div>
            <div class="payment">현대카드</div>
            <div class="price minus">-20,000원</div>
          </div>
          <div class="row">
            <i class="icon category-icon transport" title="교통">car_fill</i>
            <div class="description">지난달 교통비</div>
            <div class="payment">국민은행</div>
            <div class="price minus">-53,000원</div>
        </div>
      </div>
      </div>
      <div class="daily-reports">
        <div class="report-header">
          <div class="day">6월 14일 화</div>
          <!-- <div class="daily-total">
            <div class="plus">+26,000원</div>
            <div class="minus">-13,000원</div>
          </div> -->
        </div>
        <div class="report-body">
          <div class="row">
            <i class="icon category-icon culture" title="문화/여가">film</i>
            <div class="description">아이언맨3 4D</div>
            <div class="payment">현대카드</div>
            <div class="price minus">-40,000원</div>
          </div>
          <div class="row">
            <i class="icon category-icon money" title="월급">money_dollar</i>
            <div class="description">월급</div>
            <div class="payment">국민은행</div>
            <div class="price plus">+2,750,000원</div>
        </div>
      </div>
      </div>
    
      <div class="daily-reports">
        <div class="report-header">
          <div class="day">6월 16일 화</div>
          <!-- <div class="daily-total">
            <div class="plus">+26,000원</div>
            <div class="minus">-13,000원</div>
          </div> -->
        </div>
        <div class="report-body">
          <div class="row">
            <i class="icon category-icon shop" title="쇼핑/뷰티">cart</i>
            <div class="description">미용실</div>
            <div class="payment">현대카드</div>
            <div class="price minus">-20,000원</div>
          </div>
          <div class="row">
            <i class="icon category-icon money" title="월급">money_dollar</i>
            <div class="description">월급</div>
            <div class="payment">국민은행</div>
            <div class="price plus">+2,750,000원</div>
        </div>
      </div>
      </div>
      <div class="daily-reports">
        <div class="report-header">
          <div class="day">6월 15일 화</div>
          <!-- <div class="daily-total">
            <div class="plus">+26,000원</div>
            <div class="minus">-13,000원</div>
          </div> -->
        </div>
        <div class="report-body">
          <div class="row">
            <!-- <i class="icon category-icon food" title="식비">poultry_leg</i> -->
            <i class="icon category-icon food" title="식비">tray</i>
            <div class="description">BBQ 황금올리브</div>
            <div class="payment">현대카드</div>
            <div class="price minus">-20,000원</div>
          </div>
          <div class="row">
            <i class="icon category-icon transport" title="교통">car_fill</i>
            <div class="description">지난달 교통비</div>
            <div class="payment">국민은행</div>
            <div class="price minus">-53,000원</div>
        </div>
      </div>
      </div>
      <div class="daily-reports">
        <div class="report-header">
          <div class="day">6월 14일 화</div>
          <!-- <div class="daily-total">
            <div class="plus">+26,000원</div>
            <div class="minus">-13,000원</div>
          </div> -->
        </div>
        <div class="report-body">
          <div class="row">
            <i class="icon category-icon culture" title="문화/여가">film</i>
            <div class="description">아이언맨3 4D</div>
            <div class="payment">현대카드</div>
            <div class="price minus">-40,000원</div>
          </div>
          <div class="row">
            <i class="icon category-icon money" title="월급">money_dollar</i>
            <div class="description">월급</div>
            <div class="payment">국민은행</div>
            <div class="price plus">+2,750,000원</div>
        </div>
      </div>
      </div>
    
      <div class="daily-reports">
        <div class="report-header">
          <div class="day">6월 16일 화</div>
          <!-- <div class="daily-total">
            <div class="plus">+26,000원</div>
            <div class="minus">-13,000원</div>
          </div> -->
        </div>
        <div class="report-body">
          <div class="row">
            <i class="icon category-icon shop" title="쇼핑/뷰티">cart</i>
            <div class="description">미용실</div>
            <div class="payment">현대카드</div>
            <div class="price minus">-20,000원</div>
          </div>
          <div class="row">
            <i class="icon category-icon money" title="월급">money_dollar</i>
            <div class="description">월급</div>
            <div class="payment">국민은행</div>
            <div class="price plus">+2,750,000원</div>
        </div>
      </div>
      </div>
      <div class="daily-reports">
        <div class="report-header">
          <div class="day">6월 15일 화</div>
          <!-- <div class="daily-total">
            <div class="plus">+26,000원</div>
            <div class="minus">-13,000원</div>
          </div> -->
        </div>
        <div class="report-body">
          <div class="row">
            <!-- <i class="icon category-icon food" title="식비">poultry_leg</i> -->
            <i class="icon category-icon food" title="식비">tray</i>
            <div class="description">BBQ 황금올리브</div>
            <div class="payment">현대카드</div>
            <div class="price minus">-20,000원</div>
          </div>
          <div class="row">
            <i class="icon category-icon transport" title="교통">car_fill</i>
            <div class="description">지난달 교통비</div>
            <div class="payment">국민은행</div>
            <div class="price minus">-53,000원</div>
        </div>
      </div>
      </div>
      <div class="daily-reports">
        <div class="report-header">
          <div class="day">6월 14일 화</div>
          <!-- <div class="daily-total">
            <div class="plus">+26,000원</div>
            <div class="minus">-13,000원</div>
          </div> -->
        </div>
        <div class="report-body">
          <div class="row">
            <i class="icon category-icon culture" title="문화/여가">film</i>
            <div class="description">아이언맨3 4D</div>
            <div class="payment">현대카드</div>
            <div class="price minus">-40,000원</div>
          </div>
          <div class="row">
            <i class="icon category-icon money" title="월급">money_dollar</i>
            <div class="description">월급</div>
            <div class="payment">국민은행</div>
            <div class="price plus">+2,750,000원</div>
        </div>
      </div>
      </div>
      
      </div>
    </section>
    </main>
    `
  }
}

customElements.define('reports-list', ReportsList)