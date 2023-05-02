import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";

import { GetDataService } from "./get-data.service";
import { Post } from "src/app/models/Post";

describe("GetDataService", () => {
  let service: GetDataService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [service],
    });

    service = TestBed.inject(GetDataService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should retrieve posts data", () => {
    const mockPosts: Post[] = [
      { id: "1", userId: "1", title: "Post 1", body: "Body 1" },
      { id: "2", userId: "1", title: "Post 2", body: "Body 2" },
    ];

    service.getPostsData().subscribe((posts) => {
      expect(posts).toEqual(mockPosts);
    });

    const req = httpTestingController.expectOne(
      service.jsonDataUrl + service.postsUrl
    );

    expect(req.request.method).toEqual("GET");

    req.flush(mockPosts);
  });
});
