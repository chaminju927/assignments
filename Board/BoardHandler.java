package bitcamp.Board;

import java.sql.Date;

import bitcamp.myapp.Board.;
import bitcamp.myapp.Prompt;

public class BoardHandler {
	 static final int SIZE = 100;
	 static int count = 0;
	 
	 static Board[] menu = new Board[SIZE];

	  static String title = "게시판관리";
	  
	  static void makecontent() {
		  Board m = new Board();
		  m.no = Prompt.inputInt("번호? ");
		  m.title = Prompt.inputString("제목? ");
		  m.content = Prompt.inputString("내용? ");
		  m.password = Prompt.inputString("암호? ");
		  m.createdDate = new Date(System.currentTimeMillis()).toString();

		  members[count++] = m;
		  }  
	  }
static void service() {
    while (true) {
      System.out.println(title);
      System.out.println("1. 등록");
      System.out.println("2. 목록");
      System.out.println("3. 조회");
      System.out.println("4. 변경");
      System.out.println("5. 삭제");
      System.out.println("6. 검색");
      System.out.println("0. 이전");
      int menuNo = Prompt.inputInt(String.format("%s> ", title));

      switch (menuNo) {
        case 0: return;
        case 1: inputMember(); break;
        case 2: printMembers(); break;
        case 3: printMember(); break;
        case 4: modifyMember(); break;
        case 5: deleteMember(); break;
        case 6: searchMember(); break;
        default:
          System.out.println("잘못된 메뉴 번호 입니다.");
      }
    }
  }
} 

}
